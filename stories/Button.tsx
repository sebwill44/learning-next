import React from 'react';
import { ButtonProps } from '../types/ButtonProps';
import styles from './Button.module.css'


/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={styles.storybook_button}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
