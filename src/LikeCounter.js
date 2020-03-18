import React from 'react';

export default props => {
    function getCountColored(cnt){
        if(cnt === 0){
            return (<span className="text-secondary">{cnt}</span>);
        }else if(cnt > 0){
            return <span className="text-success">{cnt}</span>;
        }else{
          return <span className="text-danger">{cnt}</span>;
        }
    };

    return (
        <div>
            <i className="material-icons" onClick={()=>props.addLikeHandler(props.count - 1)}>thumb_down</i>
                {getCountColored(props.count)}
                <i className="material-icons" onClick={()=>props.addLikeHandler(props.count + 1)}>thumb_up</i>
        </div>
    );
};