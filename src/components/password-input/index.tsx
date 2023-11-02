import { useState } from 'react';
import { Input, InputProps } from '@nextui-org/react';
import { EyeFilledIcon } from './eye-filled-icon';
import { EyeSlashFilledIcon } from './eye-slash-filled-icon';

export const PasswordInput = (props: InputProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      label='Password'
      variant='bordered'
      placeholder='Enter your password'
      endContent={
        <button className='focus:outline-none' type='button' onClick={toggleVisibility}>
          {isVisible ? (
            <EyeSlashFilledIcon className='text-2xl text-default-400 pointer-events-none' />
          ) : (
            <EyeFilledIcon className='text-2xl text-default-400 pointer-events-none' />
          )}
        </button>
      }
      type={isVisible ? 'text' : 'password'}
      {...props}
    />
  );
};
