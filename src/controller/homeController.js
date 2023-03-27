let getHomepage = (req, res) => {
  const user = { name: 'quoc', age: 26 };
  return res.render('./home.ejs', { user });
};

module.exports = {
  getHomepage,
};
