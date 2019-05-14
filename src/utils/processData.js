export default (data) => {
  const courses = data.map(raw => {
    const { 
      title,
      level,
      summary, 
      projects,
      image,
      short_summary
    }  = raw;

    return ({
      title,
      level,
      summary, 
      projectQuantity: projects.length,
      image,
      short_summary
    });
  })
  
  return courses;
}