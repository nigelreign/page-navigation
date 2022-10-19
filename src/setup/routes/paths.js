export const ROOT_PATH = "/";

function path(root, sublink) {
  return `${root}${sublink}`;
}

// Naviagation pages for easy control if page is called in more than one place in the app
// So when the path changes we just in this one area

export const PATHS = {
  pageOne: path(ROOT_PATH, "page-one"),
  pageTwo: path(ROOT_PATH, "page-two"),
};
