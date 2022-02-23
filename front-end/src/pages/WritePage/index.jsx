import "./createPost.css";

export default function CreatePost() {
  return (
    <div className="write">
      <form className="writeForm">
        <div className="writeFormGroup">
          <div className="headerInfo">
            <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
            <input
              type="text"
              placeholder="Title"
              className="writeInput"
              autoFocus={true}
              style={{ fontSize: "30" }}
            />
          </div>
          <input type="text" placeholder="Author" className="writeInput" />
          <textarea
            placeholder="Tell me your thoughts..."
            type="text"
            className="writeInput writeText"
            rows={10}
          ></textarea>
          <h3>Informações sobre o filme</h3>
          <p>O preenchimento dessas informações ajuda na busca pelo seu texto.</p>
          <label htmlFor="releaseDecade">Release Decade</label>
          <select name="releaseDecade" id="releaseDecade">
            <option value="1930">1930</option>
            <option value="1940">1940</option>
            <option value="1950">1950</option>
            <option value="1960">1960</option>
            <option value="1970">1970</option>
            <option value="1980">1980</option>
            <option value="1990">1990</option>
            <option value="2000">2000</option>
            <option value="2010">2010</option>
            <option value="2020">2020</option>
          </select>
        </div>
      </form>
    </div>
  );
}