


import { getTeamMemberBySlug, getAllTeamMemberSlugs } from '../../../../app/data/team'
import { notFound } from 'next/navigation';
import ProfilePage from '../../components/ProfilePage';

export default function TeamMemberProfile({ params }) {
  const { slug } = params;
  const member = getTeamMemberBySlug(slug);

  if (!member) {
    notFound();
  }

  return <ProfilePage member={member} />;
}

// Generate static params for all team members
export async function generateStaticParams() {
  const slugs = await getAllTeamMemberSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Optional: Add metadata for SEO
export async function generateMetadata({ params }) {
  const member = getTeamMemberBySlug(params.slug);

  if (!member) {
    return {
      title: 'Team Member Not Found',
    };
  }

  return {
    title: `${member.name} - ${member.role} | Your Company Name`,
    description: member.summary,
  };
}