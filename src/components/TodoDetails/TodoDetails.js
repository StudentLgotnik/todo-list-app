import * as React from 'react';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';

export const TodoDetails = ( { onSubmit, initialValues = {} }) => {
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: onSubmit,
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="completed">Completed</label>
            <input
                id="completed"
                name="completed"
                type="checkbox"
                onChange={formik.handleChange}
                checked={formik.values.completed}
            />
            <label htmlFor="name">Name</label>
            <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
            />
            <label htmlFor="description">Description</label>
            <input
                id="description"
                name="description"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.description}
            />
            <label htmlFor="deadline">Deadline</label>
            <input
                id="deadline"
                name="deadline"
                type="date"
                onChange={formik.handleChange}
                value={formik.values.deadline}
            />
            <label htmlFor="priority">Priority</label>
            <input
                id="priority"
                name="priority"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.priority}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

TodoDetails.propTypes = {
    onSubmit: PropTypes.func,
};
