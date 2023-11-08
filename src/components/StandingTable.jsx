import PropTypes from "prop-types";
import Loading from "./Loading";
// motion
import { motion } from "framer-motion";
// vartants
import { fadeIn } from "../variants";
const StandingTable = ({ clubList, groupList, group }) => {
  let no = 1;
  if (!clubList || !groupList) {
    return (
      <div className="container">
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <div className="w-full overflow-hidden rounded-sm shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left uppercase border-b dark:border-gray-900 text-white bg-red-600 ">
                <th className="px-4 py-3">Pos</th>
                <th className="px-4 py-3">Club </th>
                {/* <th className="px-4 py-3">Abbreviation </th> */}
                <th className="px-4 py-3"></th>
                {/* <th className="px-4 py-3">Group</th> */}
                <th className="px-4 py-3">Played</th>
                <th className="px-4 py-3">Won</th>
                <th className="px-4 py-3">Drawn</th>
                <th className="px-4 py-3">Lost</th>
                <th className="px-4 py-3">GF</th>
                <th className="px-4 py-3">GA</th>
                <th className="px-4 py-3">GD</th>
                <th className="px-4 py-3">Point</th>
                <th className="px-4 py-3">Form</th>
                <th className="px-4 py-3">Next</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-900">
              {clubList.length == 0 && (
                <>
                  <tr className=" text-center">
                    <td className="py-8 " colSpan={18}>
                      No Data
                    </td>
                  </tr>
                </>
              )}

              {clubList.map((post, index) => {
                const groupId = groupList.filter(
                  (data) => data.groupName == group
                )[0].id;
                console.log("groupId", groupId);
                if (groupId !== post.group) return;
                return (
                  <>
                    <motion.tr
                      variants={fadeIn("right", 0.2)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: true, amount: 0.3 }}
                      key={index}
                      className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400"
                    >
                      <td className="px-4 py-3">{no++}</td>
                      <td className="px-4 py-3 hidden md:block">
                        {post.clubName}
                      </td>
                      <td className="px-4 py-3 md:hidden">{post.shortName}</td>
                      {/* <td className="px-4 py-3">{post.shortName}</td> */}
                      <td className="px-4 py-3">
                        <div className="w-[40px] h-[40px]">
                          <img
                            className="w-full h-full cover rounded-full"
                            src={post.logo}
                          />
                        </div>
                      </td>

                      {/* <td className="px-4 py-3">
                      {groupList &&
                        groupList.map((group) => {
                          if (group.id == post.group) {
                            return group.groupName;
                          }
                        })}
                    </td> */}
                      <td className="px-4 py-3">{post.numMatch}</td>
                      <td className="px-4 py-3">{post.numWin}</td>
                      <td className="px-4 py-3">{post.numDraw}</td>
                      <td className="px-4 py-3">{post.numLost}</td>
                      <td className="px-4 py-3">{post.numGF}</td>
                      <td className="px-4 py-3">{post.numGA}</td>
                      <td className="px-4 py-3">{post.numGD}</td>
                      <td className="px-4 py-3">{post.point}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1">
                          {post.form.map((form) => {
                            const bg =
                              form.result == "W"
                                ? "bg-green-600"
                                : form.result == "D"
                                ? "bg-yellow-600"
                                : "bg-red-600";
                            return (
                              <span
                                key={index}
                                className={`px-1.5 text-white rounded ${bg}`}
                              >
                                {form.result}
                              </span>
                            );
                          })}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        {clubList.map((club) => {
                          if (club.clubId == post.nextGame) {
                            return (
                              <div key={club.id} className="w-[40px] h-[40px]">
                                <img
                                  className="w-full h-full cover rounded-full"
                                  src={club.logo}
                                />
                              </div>
                            );
                          }
                        })}
                      </td>
                    </motion.tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800"></div>
      </div>
    </div>
  );
};
StandingTable.propTypes = {
  deltePost: PropTypes.func.isRequired,
  clubList: PropTypes.array.isRequired,
  groupList: PropTypes.array.isRequired,
  group: PropTypes.string.isRequired,
};
export default StandingTable;
