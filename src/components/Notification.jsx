const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center justify-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl`}
    >
      <h6 className="font-semibold text-base text-center">{title}</h6>
    </div>
  );
};

export default Notification;
