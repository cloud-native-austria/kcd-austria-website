import React from 'react';
import Button from '../../../shared/button';

export const WrapUp = () => (<section className="safe-paddings container-md flex flex-col items-center gap-4">
  <h1>It's a Wrap!</h1>
  <p>
    Thank you all for making the Kubernetes Community Days a fantastic event!
  </p>
  <p>
    In case you missed any of the talks or just want to review the event, check out the following links:
  </p>
  <div className="flex flex-wrap gap-4 items-center justify-center">
    <a href="https://www.youtube.com/playlist?list=PLtLBTEzR4SqXICiZEESHcElCqQYgjmfYR">
      <Button>Watch all the talks</Button>
    </a>
    <a href="https://hansberndlevents.myportfolio.com/kcd-austria">
      <Button>
        See all the pictures
      </Button>
    </a>
  </div>
</section>);

export default WrapUp;