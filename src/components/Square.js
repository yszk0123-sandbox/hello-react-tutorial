import React from 'react';

export default function Square(props) {
  const classNames = ['square'];

  if (props.hilight) {
    classNames.push('hilight');
  }

  return (
    <button className={classNames.join(' ')} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
