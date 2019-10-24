import React, { Component } from "react";
import PropTypes from "prop-types";

class AddColorForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(e) {
    e.preventDefault();
    const { _colorTitle, _colorHex } = this.refs;
    this.props.onAddColor(_colorTitle.value, _colorHex.value);
    _colorTitle.value = "";
    _colorHex.value = "#000";
    _colorTitle.focus();
  }
  render() {
    return (
      <div>
        <form className="color-form container" onSubmit={this.submit}>
          <input
            type="text"
            ref="_colorTitle"
            name="colorTitle"
            placeholder="Enter Color title"
            className="form-control col-md-8 d-inline-block"
          />
          <input
            type="color"
            ref="_colorHex"
            name="colorHex"
            className="form-control col-sm-1 d-inline-block ml-2"
          />
          <button className="btn btn-success d-inline-block mb-2 ml-2">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
AddColorForm.propTypes = {
  onAddColor: PropTypes.func
};
AddColorForm.defaultProps = {
  onAddColor: f => f
};

export default AddColorForm;
