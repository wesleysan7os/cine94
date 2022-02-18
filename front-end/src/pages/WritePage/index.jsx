import "./createPost.css";

export default function CreatePost() {
  return (
    <div className="write">
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell me your thoughts..."
            type="text"
            className="writeInput writeText"
            rows={10}
          ></textarea>
        </div>
      </form>
    </div>
  );
}