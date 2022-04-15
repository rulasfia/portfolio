import LinkTo from '../atoms/LinkTo';

interface Props {
  repoUrl?: string;
  demoUrl?: string;
}

export default function ProjectLink({ demoUrl, repoUrl }: Props) {
  return (
    <ul className="mt-4">
      <li>
        Project Repo:{' '}
        {repoUrl ? (
          <LinkTo to={repoUrl} blank className="">
            Click here
          </LinkTo>
        ) : (
          'Not Available'
        )}
      </li>
      <li>
        Project Demo:{' '}
        {demoUrl ? (
          <LinkTo to={demoUrl} blank className="">
            Click here
          </LinkTo>
        ) : (
          'Not Available'
        )}
      </li>
    </ul>
  );
}
