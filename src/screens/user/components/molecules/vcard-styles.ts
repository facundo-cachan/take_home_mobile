const container = 'bg-white m-4 p-4 rounded-lg shadow-lg'
const name = 'text-2xl font-bold text-green-300'
const location = 'text-xl text-gray-500 py-2'
const bio = 'text-gray-500 py-2 italic'
const styles = {
  landscape: {
    container: `${container} flex flex-row`,
    info: 'ml-6 w-4/6',
    name,
    location,
    bio: `${bio} text-lg`
  },
  portrait: {
    container: `${container} items-center`,
    info: 'items-center mt-3',
    name,
    location,
    bio
  }
}

export default styles
