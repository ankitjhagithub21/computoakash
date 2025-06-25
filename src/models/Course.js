import { Schema, model, models } from 'mongoose';

const CourseSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Course = models.Course || model('Course', CourseSchema);
export default Course;
