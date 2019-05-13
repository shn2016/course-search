import axios from 'axios';
import qs from 'qs';

export default (level, tracks, title) => axios.get('http://localhost:3333/api/courses',{
  params: {
   level,
   tracks,
   title,
  },
  paramsSerializer: params => qs.stringify(params),
});