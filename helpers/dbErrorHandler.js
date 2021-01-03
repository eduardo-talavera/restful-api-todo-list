exports.errorHandler = (error) => {
  let message = "";

  if (error.parent) {
    switch (error.parent.code) {
      case "23505":
        message = "the title already exists try another";
        break;
      default:
        message = "Something went wrong";
    }
  } else if (error.name === "SequelizeValidationError") {
      let errors = [];
      errors = error.errors.map((err) => err.message);

      return errors;
  }

  return message;
};
