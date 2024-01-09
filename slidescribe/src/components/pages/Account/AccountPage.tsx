import InputField from "../../organisms/InputField";
import Button from "../../organisms/Button.tsx";
import { CgDanger } from "react-icons/cg";

const AccountPage = () => {
	return (
		<div>
			<div className="py-4 text-base font-medium text-neutral-500">
				<h3>Account</h3>
			</div>

			<hr className="text-neutral-50" />

			<div className="my-10">
				<div className="my-6">
					<h4 className="text-neutral-900 font-medium text-base mb-2">
						Change Name
					</h4>
					<p className="text-neutral-700 font-medium text-sm">
						You can change the name you provided during the onboarding process
					</p>
				</div>
				<div>
					<div className="my-6">
						<label
							htmlFor="firstName"
							className="font-medium text-neutral-300 text-base block mb-2">
							First Name
						</label>
						<InputField
							type="text"
							str="firstName"
							placeholder=""
							value=""></InputField>
					</div>
					<div className="my-6">
						<label
							htmlFor="lastName"
							className="font-medium text-neutral-300 text-base block mb-2">
							Last Name
						</label>
						<InputField
							type="text"
							str="lastName"
							placeholder=""
							value=""></InputField>
					</div>
					<Button variant="primary" styleHolder="w-max text-sm font-medium">
						Save changes
					</Button>
				</div>
			</div>

			<hr className="text-neutral-50" />

			<div className="my-10">
				<div className="my-6">
					<h4 className="text-neutral-900 font-medium text-base mb-2">
						Change Email Adress
					</h4>
					<p className="text-neutral-700 font-medium text-sm">
						You can change the email address you provided during the onboarding
						process
					</p>
				</div>
				<div>
					<div className="my-6">
						<label
							htmlFor="firstName"
							className="font-medium text-neutral-300 text-base block mb-2">
							Current Email Address
						</label>
						<InputField
							type="email"
							str="email"
							placeholder=""
							value=""></InputField>
					</div>
					<div className="my-6">
						<label
							htmlFor="lastName"
							className="font-medium text-neutral-300 text-base block mb-2">
							Last Name
						</label>
						<InputField
							type="text"
							str="lastName"
							placeholder=""
							value=""></InputField>
					</div>
					<Button variant="primary" styleHolder="w-max text-sm font-medium">
						Change email address
					</Button>
				</div>
			</div>

			<hr className="text-neutral-50" />

			<div className="my-10">
				<div className="my-6">
					<h4 className="text-neutral-900 font-medium text-base mb-2">
						Delete Account
					</h4>
					<div className="flex items-center justify-center w-fit mb-5 gap-1">
						<CgDanger className="h-8 w-6 text-red-500" />
						<p className="text-red-500 font-semibold text-sm">
							Your account and all associated data will be removed from our
							server
						</p>
					</div>
					<Button
						variant="primary"
						styleHolder="bg-red-400 w-max border-red-400 hover:bg-red-500">
						Delete my account
					</Button>
				</div>
			</div>
		</div>
	);
};

export default AccountPage;
