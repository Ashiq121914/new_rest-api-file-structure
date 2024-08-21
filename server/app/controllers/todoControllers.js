// create
export const store = async (req, res) => {
  return res.json({
    status: "success",
    message: "item created successfully",
  });
};
// read
export const show = async (req, res) => {
  return res.json({
    status: "success",
    message: "item show successfully",
  });
};
// update
export const update = async (req, res) => {
  return res.json({
    status: "success",
    message: "item update successfully",
  });
};
// delete
export const destroy = async (req, res) => {
  return res.json({
    status: "success",
    message: "item delete successfully",
  });
};
