import css from "./TaskModal.module.scss";

const TaskModal = () => {
    return <div className={css.modal}>
        <input type="text" placeholder="enter task"/>

    </div>
};

export default TaskModal;
