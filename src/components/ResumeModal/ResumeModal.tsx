import "./ResumeModal.scss";

const ResumeModal = () => {
  return (
    <div className="modal">
      <iframe
        className="modal__resume"
        title="resume"
        src="http://www.africau.edu/images/default/sample.pdf"
      ></iframe>
    </div>
  );
};

export default ResumeModal;
