import {
  SocialFacebook,
  SocialTwitter,
  SocialMail,
  SocialGithub,
} from '@components/Icons';

export const SocialButtons = () => {
  return (
    <div className='flex justify-center gap-3'>
      <SocialFacebook className='cursor-pointer' />
      <SocialTwitter className='cursor-pointer' />
      <SocialMail className='cursor-pointer' />
      <SocialGithub className='cursor-pointer' />
    </div>
  );
};
