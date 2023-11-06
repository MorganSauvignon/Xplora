import Image from 'next/image';
//import { fetchActivite } from '@/app/lib/data';
import tabActivite from '@/app/lib/activite.json';

export default async function ActiviteTable() {
  const activites = tabActivite;

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {activites?.map((activite, index) => (
              <div
                key={index}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={activite.image}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${activite.title}'s profile picture`}
                      />
                      <p>{activite.title}</p>
                    </div>
                    <p className="text-sm text-gray-500">{activite.description}</p>
                  </div>
                  <p className="text-sm text-gray-500">{activite.type}</p>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {activite.ville}
                    </p>
                    <p>{activite.rating}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Titre
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Description
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Ville
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Rating
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Type
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {activites?.map((activite) => (
                <tr
                  key={1}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={activite.image}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${activite.title}'s profile picture`}
                      />
                      <p>{activite.title}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {activite.description}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {activite.ville}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {activite.rating}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {activite.type}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
