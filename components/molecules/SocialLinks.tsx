import LinkTo from '../atoms/LinkTo';
import GithubLogo from '../atoms/Logo/GithubIcon';
import TwitterIcon from '../atoms/Logo/TwitterIcon';

export default function SocialLinks() {
  return (
    <div className="flex flex-row items-center justify-start gap-6">
      <LinkTo blank to="https://github.com/asfian99" className="">
        <span className="group flex flex-row items-center gap-2 text-white opacity-75 hover:opacity-100">
          <TwitterIcon className="h-4 w-4 group-hover:text-blue-500" />
          <span className="border-b border-dashed border-transparent group-hover:border-white">
            asfian99
          </span>
        </span>
      </LinkTo>

      <LinkTo blank to="https://github.com/asfian99" className="">
        <span className="group flex flex-row items-center gap-2 text-white opacity-75 hover:opacity-100">
          <GithubLogo className="h-4 w-4" />
          <span className="border-b border-dashed border-transparent group-hover:border-white">
            asfian99
          </span>
        </span>
      </LinkTo>
    </div>
  );
}
