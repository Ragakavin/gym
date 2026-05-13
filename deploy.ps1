# Requires GitHub Personal Access Token with repo scope
# Create one at: https://github.com/settings/tokens

param(
    [Parameter(Mandatory=$true)]
    [string]$GitHubToken,
    
    [Parameter(Mandatory=$false)]
    [string]$RepoName = "uplift"
)

$ProjectRoot = Split-Path -Parent $MyInvocation.MyCommandPath
$BackendPath = Join-Path $ProjectRoot "backend"

Write-Host "🚀 UPLIFT Deployment Script" -ForegroundColor Green
Write-Host "================================`n"

# Step 1: Build the app
Write-Host "📦 Building application..." -ForegroundColor Cyan
Push-Location $BackendPath
mvn -DskipTests clean package
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    Pop-Location
    exit 1
}
Pop-Location
Write-Host "✅ Build successful`n" -ForegroundColor Green

# Step 2: Create GitHub repo
Write-Host "📝 Creating GitHub repository..." -ForegroundColor Cyan
$headers = @{
    "Authorization" = "token $GitHubToken"
    "Accept" = "application/vnd.github.v3+json"
}

$body = @{
    "name" = $RepoName
    "description" = "Fitness tracking and workout guidance platform"
    "private" = $false
    "auto_init" = $true
} | ConvertTo-Json

$response = Invoke-RestMethod -Uri "https://api.github.com/user/repos" `
    -Method POST `
    -Headers $headers `
    -Body $body

$repoUrl = $response.html_url
$cloneUrl = $response.clone_url
Write-Host "✅ Repository created: $repoUrl`n" -ForegroundColor Green

# Step 3: Clone and upload files
Write-Host "📤 Uploading files to GitHub..." -ForegroundColor Cyan
$tempDir = Join-Path $env:TEMP "uplift_deploy_$(Get-Random)"
New-Item -ItemType Directory -Path $tempDir -Force | Out-Null

# Copy project files
Copy-Item -Path "$ProjectRoot\*" -Destination $tempDir -Recurse -Force `
    -Exclude @("target", ".git", ".idea", ".vscode", "*.jar", ".DS_Store")

Push-Location $tempDir

# Initialize git with GitHub token auth
git init
git config user.name "UPLIFT Deploy"
git config user.email "deploy@uplift.local"
git add .
git commit -m "Initial deployment"

# Create auth URL with token
$authUrl = $cloneUrl.Replace("https://", "https://${GitHubToken}@")
git remote add origin $authUrl
git branch -M main
git push -u origin main

Pop-Location
Remove-Item -Path $tempDir -Recurse -Force

Write-Host "✅ Files uploaded to GitHub`n" -ForegroundColor Green

# Step 4: Output Railway deployment link
Write-Host "🎉 Deployment Ready!`n" -ForegroundColor Green
Write-Host "Your repository: $repoUrl" -ForegroundColor Yellow
Write-Host "`nNext steps:`n" -ForegroundColor White
Write-Host "1. Go to: https://railway.app/dashboard"
Write-Host "2. Click: + New Project"
Write-Host "3. Choose: Deploy from GitHub repo"
Write-Host "4. Select: $RepoName"
Write-Host "5. Railway will build and deploy automatically!`n"
Write-Host "Your app will be live in 3-5 minutes on a Railway URL.`n" -ForegroundColor Cyan
