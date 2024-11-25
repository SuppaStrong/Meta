import { sanitize } from "../utils/SlugUtils";

import "@wordpress/block-library/build-style/common.css";
import "@wordpress/block-library/build-style/style.css";
import "@wordpress/block-library/build-style/theme.css";
import "@wordpress/components/build-style/style.css";
import "@wordpress/block-editor/build-style/style.css";

const PageWordPressContentRender = ({ pageData }) => {
  return <div dangerouslySetInnerHTML={{ __html: sanitize(pageData ?? "") }} />;
};

export default PageWordPressContentRender;
