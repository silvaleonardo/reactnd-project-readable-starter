import React from 'react';

import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const PostNotFound = () => (
  <section className="post-not-found">
    <Typography
      color="primary"
      variant="title"
    >
      Oooops!
    </Typography>

    <Typography variant="subheading">
      This is not the web page you are looking for.
    </Typography>

    <Button onClick={ () => window.history.back() }>Go back!</Button>
  </section>
);

export default PostNotFound;
