// Timeline.jsx
export default function Timeline({ items }) {
  return (
    <div className="relative border-l border-gray-300 dark:border-gray-700">
      {items.map((item, index) => (
        <div key={index} className="mb-10 ml-6">
          {/* Dot */}
          <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full ring-4 ring-white dark:ring-gray-900"></span>

          {/* Content */}
          <h3 className="text-lg font-semibold">{item.role}</h3>
          <span className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
            {item.company} • {item.period}
          </span>
          <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
