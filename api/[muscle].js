const workouts = {
  arms: [
    { name: "Bicep Curl", image: "/images/Bicepcurls.jpg", description: "Isolation for peak contraction.", reps: "3 sets x 10-12 reps", instructions: "Stand with dumbbells at sides, curl weights up toward shoulders, lower back down." },
    { name: "Tricep Dips", image: "/images/Tricep Dips.png", description: "Bodyweight triceps strength.", reps: "3 sets x 8-12 reps", instructions: "Use dip station, lower body until arms at 90 degrees, push back up explosively." },
    { name: "Hammer Curls", image: "/images/Hammer curls.png", description: "Bicep and forearm builder.", reps: "3 sets x 10-12 reps", instructions: "Hold dumbbells at sides, curl upward with neutral grip, lower back down controlled." },
    { name: "Tricep Rope Pushdown", image: "/images/Rope pushdown.png", description: "Tricep cable isolation exercise.", reps: "3 sets x 12-15 reps", instructions: "Hold rope at chest height, extend arms down, return to starting position." }
  ],
  chest: [
    { name: "Bench Press", image: "/images/Bench press.jpg", description: "Primary compound movement for chest growth.", reps: "4 sets x 8-10 reps", instructions: "Lie on flat bench, lower bar to chest, press up explosively." },
    { name: "Incline Dumbbell", image: "/images/Inclined dumbells.webp", description: "Upper chest activation exercise.", reps: "3 sets x 10-12 reps", instructions: "Lie on incline bench, lower dumbbells to chest, press up." },
    { name: "Push-ups", image: "/images/Pushup.png", description: "Bodyweight chest exercise.", reps: "3 sets x 12-15 reps", instructions: "Start in plank position, lower body until chest near ground, push back up." },
    { name: "Cable Flyes", image: "/images/Bench press.jpg", description: "Isolation exercise for chest definition.", reps: "3 sets x 12-15 reps", instructions: "Stand in middle of cable machine, pull handles together in arc motion, return to start." }
  ],
  back: [
    { name: "Pull Ups", image: "/images/Pull-Ups.png", description: "Best bodyweight back exercise.", reps: "4 sets x 6-10 reps", instructions: "Grip bar with hands shoulder-width apart, pull body up until chin above bar, lower down slowly." },
    { name: "Lat Pulldown", image: "/images/Latpull down.jpg", description: "Build wide lats and strength.", reps: "3 sets x 10-12 reps", instructions: "Sit at machine, grab bar, pull down to chest, slowly release back up." },
    { name: "Barbell Rows", image: "/images/Barbell Rows.png", description: "Heavy compound back builder.", reps: "4 sets x 6-8 reps", instructions: "Bend at hips, grip bar, pull to lower chest, lower back down controlled." },
    { name: "Assisted Pull Ups", image: "/images/Assisted pushup.png", description: "Pull ups with machine assistance.", reps: "3 sets x 8-12 reps", instructions: "Use machine with assistance, grip bar, pull body up, lower down slowly." }
  ],
  legs: [
    { name: "Squats", image: "/images/Squats.jpg", description: "King of all leg exercises.", reps: "4 sets x 8-10 reps", instructions: "Stand with feet shoulder-width apart, lower hips back and down, drive through heels to stand." },
    { name: "Leg Press", image: "/images/leg press.jpg", description: "Heavy compound leg builder.", reps: "3 sets x 8-12 reps", instructions: "Sit in machine, push platform away with legs, lower back slowly under control." },
    { name: "Leg Curls", image: "/images/leg curls.png", description: "Hamstring isolation exercise.", reps: "3 sets x 10-12 reps", instructions: "Lie on machine, curl legs toward body, hold briefly, lower back down." },
    { name: "Calf Raises", image: "/images/Calf raise.png", description: "Lower leg and calf strengthening.", reps: "3 sets x 12-15 reps", instructions: "Stand upright, raise up on toes, hold briefly, lower back down." }
  ]
};

module.exports = (req, res) => {
  const muscle = req.query.muscle;
  if (muscle === "health") {
    return res.status(200).json({ message: "UPLIFT API is running!" });
  }
  const data = workouts[muscle];
  if (!data) {
    return res.status(404).json({ message: "Workout route not found" });
  }
  return res.status(200).json(data);
};
