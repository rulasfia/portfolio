import clsx from 'clsx';
import MailIcon from '../atoms/Icon/MailIcon';
import LinkTo from '../atoms/LinkTo';
import GithubIcon from '../atoms/Logo/GithubIcon';
import LinkedInIcon from '../atoms/Logo/LinkedInIcon';
import TwitterIcon from '../atoms/Logo/TwitterIcon';

export default function Footer() {
  const linkStyle =
    'cursor-pointer text-primary-800 text-opacity-70 hover:text-opacity-100 dark:text-white dark:text-opacity-70 dark:hover:text-opacity-100';

  return (
    <footer className="container mx-auto px-8 pt-4 pb-8 md:py-4 md:px-24 lg:px-36">
      <div className="flex flex-col items-center justify-center gap-3 md:flex-row md:justify-between">
        <p>All rights reserved &copy; Khoirul Asfian 2022</p>

        <div className="flex flex-row items-center justify-end gap-3">
          <p>Contact Me:</p>
          {/* email link */}
          <LinkTo blank to="mailto:mk.asfian@gmail.com" className="">
            <MailIcon
              className={clsx(
                'h-6 w-6 hover:text-primary-900 dark:hover:text-white',
                linkStyle
              )}
            />
          </LinkTo>

          {/* github link */}
          <LinkTo blank to="https://github.com/rulasfia" className="">
            <GithubIcon
              className={clsx(
                'h-5 w-5 hover:text-primary-900 dark:hover:text-white',
                linkStyle
              )}
            />
          </LinkTo>

          {/* twitter link */}
          <LinkTo blank to="https://twitter.com/rulasfia" className="">
            <TwitterIcon
              className={clsx(
                'h-5 w-5 hover:text-blue-500 dark:hover:text-blue-500',
                linkStyle
              )}
            />
          </LinkTo>

          {/* linked in link */}
          <LinkTo
            blank
            to="https://linkedin.com/in/khoirul-asfian-3819161a4"
            className=""
          >
            <LinkedInIcon
              className={clsx(
                'h-6 w-6 hover:text-[#0A66C2] dark:hover:text-[#0A66C2]',
                linkStyle
              )}
            />
          </LinkTo>
        </div>
      </div>
    </footer>
  );
}
