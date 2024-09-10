interface Feature {
    title: string;
    description: string;
  }
  
  const features: Feature[] = [
    {
      title: "Clear your mind",
      description: "We've spent over a decade refining DarkMail to be an extension of your mind. Capture and organize emails instantly using easy-flowing, natural language."
    },
    {
      title: "Boost your productivity",
      description: "Our intelligent sorting and prioritization algorithms help you focus on what matters most. Spend less time managing your inbox and more time getting things done."
    },
    {
      title: "Seamless integration",
      description: "DarkMail works seamlessly with your existing email accounts and favorite productivity tools, making it easy to incorporate into your workflow."
    },
    {
      title: "Enhanced security",
      description: "With end-to-end encryption and advanced privacy features, DarkMail ensures your sensitive communications remain confidential and secure."
    }
  ]
  
  export default function FeatureSection() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 mt-[5rem]">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-gray-800 rounded-lg p-6 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700"
          >
            <h2 className="text-2xl font-bold mb-4 text-white">{feature.title}</h2>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    )
  }