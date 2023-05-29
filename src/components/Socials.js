import React from 'react';
import {
  ImFacebook,
  ImTwitter,
  ImInstagram,
  ImPinterest,
  ImYoutube,
} from 'react-icons/im'

const Socials = () => {
  return <div className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
      <li>
        <a href="facebook" target='_blank'><ImFacebook/></a>
      </li>
      <li>
        <a href="facebook" target='_blank'><ImTwitter/></a>
      </li>
      <li>
        <a href="facebook" target='_blank'><ImPinterest/></a>
      </li>
      <li>
        <a href="facebook" target='_blank'><ImInstagram/></a>
      </li>
      <li>
        <a href="facebook" target='_blank'><ImYoutube/></a>
      </li>
    </ul>
  </div>;
};

export default Socials;
