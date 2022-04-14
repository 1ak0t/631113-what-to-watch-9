import {useAppSelector} from '../../hooks';
import './error-message.css';

function ErrorMessage(): JSX.Element | null {
  const {error} = useAppSelector((state) => state);

  if (error) {
    return (
      <div className="errorMessage}">
        {error}
      </div>
    );
  }

  return null;
}

export default ErrorMessage;
