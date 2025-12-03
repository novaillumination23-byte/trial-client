import { MapPin } from 'lucide-react';

export default function GlobalPresence() {
  const locations = [
    { name: 'Dubai', country: 'UAE', status: 'Headquarters' },
    { name: 'Lagos', country: 'Nigeria', status: 'Regional Hub' },
    { name: 'Accra', country: 'Ghana', status: 'Distribution Center' },
    { name: 'Yaoundé', country: 'Cameroon', status: 'Operations' },
    { name: 'Kampala', country: 'Uganda', status: 'Operations' }
  ];

  return (
    <section id="presence" className="relative py-20 bg-gradient-to-b from-[#041524] to-[#062336]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Global Presence
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Operating across Africa and the Middle East, bringing world-class energy solutions to emerging markets.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-xl">
            <img
              src="https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Global map showing Africa and Middle East operations"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#041524]"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                <div className="absolute top-[20%] left-[60%] w-4 h-4 bg-[#FFC857] rounded-full animate-pulse shadow-lg shadow-[#FFC857]/50">
                  <div className="absolute inset-0 bg-[#FFC857] rounded-full animate-ping"></div>
                </div>

                <div className="absolute top-[45%] left-[48%] w-4 h-4 bg-[#00B3AE] rounded-full animate-pulse shadow-lg shadow-[#00B3AE]/50">
                  <div className="absolute inset-0 bg-[#00B3AE] rounded-full animate-ping"></div>
                </div>

                <div className="absolute top-[40%] left-[42%] w-4 h-4 bg-[#00B3AE] rounded-full animate-pulse shadow-lg shadow-[#00B3AE]/50">
                  <div className="absolute inset-0 bg-[#00B3AE] rounded-full animate-ping"></div>
                </div>

                <div className="absolute top-[52%] left-[46%] w-4 h-4 bg-[#00B3AE] rounded-full animate-pulse shadow-lg shadow-[#00B3AE]/50">
                  <div className="absolute inset-0 bg-[#00B3AE] rounded-full animate-ping"></div>
                </div>

                <div className="absolute top-[55%] left-[52%] w-4 h-4 bg-[#00B3AE] rounded-full animate-pulse shadow-lg shadow-[#00B3AE]/50">
                  <div className="absolute inset-0 bg-[#00B3AE] rounded-full animate-ping"></div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#041524] to-transparent">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5 text-[#00B3AE]" />
                <p className="text-gray-300 font-semibold">Serving Africa & Middle East</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {locations.map((location, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#00B3AE]/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#00B3AE] to-[#00767A] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">{location.name}</h3>
                      <p className="text-gray-400 text-sm">{location.country}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#00B3AE] bg-[#00B3AE]/10 px-3 py-1 rounded-full">
                    {location.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
