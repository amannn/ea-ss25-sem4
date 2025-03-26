'use client';

import {useState, ReactNode} from 'react';

type Props = {
  initialExpanded?: boolean;
  children: ReactNode;
  showLabel: string;
};

export default function ExpandableContent(props: Props) {
  const [expanded, setExpanded] = useState(props.initialExpanded ?? false);

  function onClick() {
    setExpanded(true);
  }

  if (expanded) {
    return props.children;
  } else {
    return (
      <div>
        <button onClick={onClick}>{props.showLabel}</button>
      </div>
    );
  }
}
