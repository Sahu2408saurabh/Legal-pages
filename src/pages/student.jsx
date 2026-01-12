// const getStudentClassSchedule = async (req, res) => {
//   try {
//     const studentId = req.user._id;
//     const enrollments = await Enrollment.find({ student: studentId }).populate('course');

//     if (!enrollments.length) {
//       return res.status(404).json({ message: 'No enrollments found' });
//     }

//     const schedules = enrollments.map(enrollment => {
//       if (enrollment.course && enrollment.course.title) {
//         return {
//           course: enrollment.course.title,
//           schedule: enrollment.classSchedule
//         };
//       } else {
//         return {
//           course: 'Unknown Course',
//           schedule: enrollment.classSchedule
//         };
//       }
//     });



//     res.status(200).json(schedules);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };