import React from "react";

const SearchForm = () => {
    return (
        <form>
            <div className="formGroup">
                <label htmlFor="Query">
                    <strong>Book</strong>
                </label>
                <input
                className="formControl"
                id="Title"
                type="text"
                // value={q}
                placeholder="The Lord of the Rings: The Fellowship of the Ring"
                name="q"
                onChange="" // TODO: handleInputChange function
                required
                />
            </div>
                <div>
                    <button
                    onClick="" // TODO: handleFormSubmit function
                    className="submitButton"
                    >
                        Search
                    </button>
                </div>
        </form>
    )
}

export default SearchForm;