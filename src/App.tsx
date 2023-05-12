import data from './data';

export default function App() {
	return (
		<main className='p-8 mx-auto max-w-5xl'>
			<table className='border border-collapse'>
				<thead>
					<tr className='border'>
						<th className='border'>Name</th>
						<th className='border'>Roles Assigned</th>
					</tr>
				</thead>
				<tbody>
					{data.map((row) => (
						<tr className='border'>
							<td className='border whitespace-nowrap p-2'>{row.name}</td>
							<td className='border p-2'>
								<div className='flex flex-wrap gap-1'>
									{row.roles.map((role, idx) => (
										<>
											{idx > 0 && <span className='text-gray-600 text-sm'>and</span>}
											<Chip role={role} />
										</>
									))}
								</div>
							</td>
							<td className='text-blue-500 px-2'>Edit</td>
						</tr>
					))}
				</tbody>
			</table>
		</main>
	);
}

type ChipProps = {
	role: (typeof data)[number]['roles'][number];
};

function Chip({ role }: ChipProps) {
	return (
		<div className='px-2 border rounded-full truncate basis-44 flex-grow max-w-fit text-sm capitalize'>
			<strong className='mr-1 font-semibold'>{role.title}:</strong>
			<span className='text-gray-600'>{role.values.join(', ')}</span>
		</div>
	);
}
