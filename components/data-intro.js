export default function DataIntro({ changeHandler }) {
    return (
      <div className="row">
        <div className="item intro">
          <div className="content">
            <strong>This is an app to discover Nobel prizes data.</strong>
          </div>
        </div>
        <div className="item intro">
          <div className="row">
            <div className="item control-container">
              <div className="content">
                <div className="row">
                  <div className="item control">
                    <div>Sort</div>
                  </div>
                  <div className="item control">
                    <select id="data-sort" onChange={changeHandler}>
                      <option value="oldest-first">Oldest to newest</option>
                      <option value="newest-first">Newest to oldest</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="item control-container">
              <div className="content">
                <div className="row">
                  <div className="item control">
                    <div>Filter</div>
                  </div>
                  <div className="item control">
                    <select id="data-filter" onChange={changeHandler}>
                      <option value="-">n/a</option>
                      <option value="chemistry">Chemistry</option>
                      <option value="physics">Physics</option>
                      <option value="literature">Literature</option>
                      <option value="peace">Peace</option>
                      <option value="physiology-medicine">Physiology or Medicine</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }