export const SectionDiv = ({ children, className, ref }) => {
  return (
    <section className={`px-52 ${className}`} ref={ref}>
      {children}
    </section>
  );
};
