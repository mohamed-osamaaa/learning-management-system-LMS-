const Course = require("../../models/Course");
const StudentCourses = require("../../models/StudentCourses");

const getAllStudentViewCourses = async (req, res) => {
    try {
        const {
            category = [],
            level = [],
            primaryLanguage = [],
            sortBy = "price-lowtohigh",
        } = req.query;

        console.log(req.query, "req.query");

        let filters = {};
        if (category.length) {
            filters.category = { $in: category.split(",") };
        }
        if (level.length) {
            filters.level = { $in: level.split(",") };
        }
        if (primaryLanguage.length) {
            filters.primaryLanguage = { $in: primaryLanguage.split(",") };
        }

        let sortParam = {};
        switch (sortBy) {
            case "price-lowtohigh":
                sortParam.pricing = 1;

                break;
            case "price-hightolow":
                sortParam.pricing = -1;

                break;
            case "title-atoz":
                sortParam.title = 1;

                break;
            case "title-ztoa":
                sortParam.title = -1;

                break;

            default:
                sortParam.pricing = 1;
                break;
        }

        const coursesList = await Course.find(filters).sort(sortParam);

        res.status(200).json({
            success: true,
            data: coursesList,
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Some error occured!",
        });
    }
};

const getStudentViewCourseDetails = async (req, res) => {
    try {
        const { id } = req.params;
        const courseDetails = await Course.findById(id);

        if (!courseDetails) {
            return res.status(404).json({
                success: false,
                message: "No course details found",
                data: null,
            });
        }

        res.status(200).json({
            success: true,
            data: courseDetails,
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Some error occured!",
        });
    }
};

const checkCoursePurchaseInfo = async (req, res) => {
    try {
        const { id, studentId } = req.params;

        // Query for student courses
        const studentCourses = await StudentCourses.findOne({
            userId: studentId,
        });

        // If no record is found, return false
        if (!studentCourses) {
            return res.status(200).json({
                success: true,
                data: false, // Student hasn't purchased the course
            });
        }

        // Check if the course exists in the student's courses
        const ifStudentAlreadyBoughtCurrentCourse = studentCourses.courses.some(
            (item) => item.courseId === id
        );

        return res.status(200).json({
            success: true,
            data: ifStudentAlreadyBoughtCurrentCourse,
        });
    } catch (e) {
        console.error("Error in checkCoursePurchaseInfo:", e);

        return res.status(500).json({
            success: false,
            message: "An error occurred while checking course purchase info.",
        });
    }
};

module.exports = {
    getAllStudentViewCourses,
    getStudentViewCourseDetails,
    checkCoursePurchaseInfo,
};
