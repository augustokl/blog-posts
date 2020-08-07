import React from 'react';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail 
          name="Augusto"
          post="Blog post test!"
          date="Today at 7:00PM"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          name="Dani"
          post="Blog post2 test!"
          date="Today at 7:36PM"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          name="John Doe"
          post="Blog post3 test!"
          date="Today at 8:36PM"
        />
      </ApprovalCard>

    </div>
  );
}

export default App;