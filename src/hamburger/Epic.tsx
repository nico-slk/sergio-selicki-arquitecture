import '../css/epic.css';


interface Props {
  message: string;
}

export const Epic = ({ message }: Props) => {
  return (
    <div className='epic'>
      <div className='message-container'>
        epic
        <p className='message'>
          {message}
        </p>
      </div>
    </div>
  );
};
