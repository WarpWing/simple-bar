const Process = ({ output }) => {
  if (!output) return null;
  const [currentApp] = output.filter((app) => app.focused === 1);
  if (!currentApp) return null;
  const { title } = currentApp;
  return (
    <div className="process">
      {title}
      { /*   {app} /   */ }
    </div>
  );
};

export default Process;
