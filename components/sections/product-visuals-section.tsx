export function ProductVisualsSection() {
  return (
    <section className="py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea6077] via-[#d46275] to-[#84404b]">
              Vate AI
            </span>{" "}
            in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our intuitive dashboard makes campaign management effortless.
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8 border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-sm text-gray-400">Vate AI Dashboard</div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Campaign Overview
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-white/5">
                    <span className="text-sm text-gray-300">
                      Active Campaigns
                    </span>
                    <span className="text-lg font-semibold text-[#ea6077]">
                      12
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-white/5">
                    <span className="text-sm text-gray-300">
                      Total Recipients
                    </span>
                    <span className="text-lg font-semibold text-[#ea6077]">
                      2,847
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-white/5">
                    <span className="text-sm text-gray-300">
                      Avg. Open Rate
                    </span>
                    <span className="text-lg font-semibold text-[#ea6077]">
                      34.2%
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Recent Activity
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-300">
                      Campaign &quot;Q4 Outreach&quot; sent to 500 recipients
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-300">
                      Follow-up sequence triggered for 23 leads
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-gray-300">
                      A/B test completed - Version B wins
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
