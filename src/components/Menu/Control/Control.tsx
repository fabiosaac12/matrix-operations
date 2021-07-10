import { FC } from 'react';
import { useStyles } from './ControlStyles';

interface Props {
  value: number;
  onChange: (value: number) => void;
}

export const Control: FC<Props> = ({ value, onChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.arrowTop} onClick={() => onChange(value + 1)} />
      <div className={classes.value}>{value}</div>
      <div
        className={classes.arrowBottom}
        onClick={() => onChange(value - 1)}
      />
    </div>
  );
};
