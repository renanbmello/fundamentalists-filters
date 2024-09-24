import {FC} from 'react';

const Loading: FC = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="loader"></div>
      <style jsx>{`
        .loader {
          border: 8px solid #e0e0e0;
          border-top: 8px solid #888888;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loading;
