import Timeline from '../templates/timeline';

const ProfilePage = () => {
  const CHARACTERISTICS = ['Software Engineer', 'Snowboarder', 'Runner'];
  const EXPERIENCE = [
    {
      title: 'Waterfall',
      subtitle: 'Founding Engineer',
      date: '2022-Current',
    },
    {
      title: 'Hive Investments',
      subtitle: 'Blockchain Engineer',
      date: '2022',
    },
    {
      title: 'Tones',
      subtitle: 'Software Engineer',
      date: '2021 - Current',
    },
    {
      title: 'Medsource Labs',
      subtitle: 'Intern',
      date: '2020',
    },
  ];

  return (
    <div className="mx-auto h-full w-[52rem] cursor-pointer space-y-6 p-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-medium">Josh Galbreath</h1>
        <h2 className="text-xl font-medium">I am a Software Engineer based in NYC</h2>
      </div>
      <section className="space-y-2 border-black">
        <h2 className="text-2xl font-medium">About</h2>
        <div className="space-y-2 border-l-2 border-black pl-4">
          <p>
            23 year old interested in design, blockchain, ai, and entreprenuership. Enjoy
            snowboarding, running, and playing guitar. Currently working on Waterfall.
          </p>
        </div>
      </section>
      <section className="space-y-2 border-black">
        <h2 className="text-2xl font-medium">Education</h2>
        <div className="space-y-1 border-l-2 border-black pl-4">
          <div className="flex items-center">
            <h3 className="font-bold">University of Michigan</h3>
            <div className="grow" />
            <p>2018 - 2022</p>
          </div>
          <h3>💼 Business</h3>
          <h3>💻 Computer Science</h3>
          <h3>🚀 Entreprenuership</h3>
        </div>
      </section>
      <section className="space-y-2">
        <h2 className="w-full text-2xl font-medium">Experience</h2>
        <Timeline items={EXPERIENCE} />
      </section>
      {/* @TODO fix this - footer workaround to prevent border collision */}
      <div className="h-1" />
    </div>
  );
};

export default ProfilePage;
