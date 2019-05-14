import axios from 'axios';
import qs from 'qs';

export default (track, level, title) => axios.get('http://localhost:3333/api/courses',{
  params: {
   track,
   level,
   title,
  },
  paramsSerializer: params => qs.stringify(params),
});