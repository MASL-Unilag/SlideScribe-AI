import React from "react";

interface UploadDataProps {
	fileName: string;
	topic: string;
	setTopic: React.Dispatch<React.SetStateAction<string>>;
	subject: string;
	setSubject: React.Dispatch<React.SetStateAction<string>>;
	numberOfPages: number;
	setNumberOfPages: React.Dispatch<React.SetStateAction<number>>;
	includePictures: boolean;
	setIncludePictures: React.Dispatch<React.SetStateAction<boolean>>;
	documentStyle: string;
	setDocumentStyle: React.Dispatch<React.SetStateAction<string>>;
	outputLanguage: string;
	setOutputLanguage: React.Dispatch<React.SetStateAction<string>>;
}

export default function UploadData({
	fileName,
	topic,
	setTopic,
	subject,
	setSubject,
	numberOfPages,
	setNumberOfPages,
	includePictures,
	setIncludePictures,
	documentStyle,
	setDocumentStyle,
	outputLanguage,
	setOutputLanguage
}: UploadDataProps) {
	const documentStyles = [
		{
			title: "Bullet points",
			value: "bullet-points",
		},
		{
			title: "Short paragraphs",
			value: "short-paragraphs",
		},
	];

	const languageOptions = [
		{
			title: "English",
			value: "english",
		},
		{
			title: "Yoruba",
			value: "yoruba",
		},
		{
			title: "Igbo",
			value: "igbo",
		},
		{
			title: "Hausa",
			value: "hausa",
		}
	];

	const formSectionClassName = "flex flex-col";
	const labelClassName = "text-caption text-neutral-900";
	const inputClassName =
		"py-2 px-3 border border-solid border-neutral-40 rounded-md text-body text-neutral-900 bg-neutral-10 placeholder-neutral-70";

	return (
		<div className="flex flex-col overflow-y-auto">
			<p className="p-2 mx-6 my-4 bg-neutral-20 text-body text-neutral-100 font-medium border border-solid border-neutral-100 rounded-md">
				{fileName}
			</p>
			<hr className="border border-solid border-neutral-20" />
			<form className="flex flex-col gap-4 mx-8 my-4 h-full overflow-y-auto">
				<div className={formSectionClassName}>
					<label htmlFor="topic" className={labelClassName}>
						Topic
					</label>
					<input
						id="topic"
						className={inputClassName}
						type="text"
						placeholder="Give this slide a topic"
						value={topic}
						onChange={(e) => setTopic(e.target.value)}
						required={true}
					/>
				</div>

				<div className={formSectionClassName}>
					<label htmlFor="subject" className={labelClassName}>
						Subject
					</label>
					<input
						id="subject"
						className={inputClassName}
						type="text"
						placeholder="Mathematics, Literature, Engineering, Science..."
						value={subject}
						onChange={(e) => setSubject(e.target.value)}
						required={true}
					/>
				</div>

				<div className={formSectionClassName}>
					<label htmlFor="number-of-pages" className={labelClassName}>
						Number of pages (Maximum is 12)
					</label>
					<input
						id="number-of-pages"
						className={inputClassName}
						type="number"
						min={1}
						max={12}
						placeholder="1"
						value={numberOfPages}
						onChange={(e) => setNumberOfPages(parseInt(e.target.value))}
						required={true}
					/>
				</div>

				<div>
					<p className="mb-[0.88rem] text-neutral-900">Choose your preferred language style</p>
					<div className="flex flex-col gap-2 ml-4">
						{languageOptions.map((style, index) => (
							<div key={index} className="flex items-center gap-2">
								<input
									id={style.value}
									type="radio"
									className="border-neutral-300 w-6 h-6"
									name="language-style"
									value={style.value}
									checked={outputLanguage === style.value}
									onChange={() => setOutputLanguage(style.value)}
								/>
								<label
									htmlFor={style.value}
									className="text-body text-neutral-500">
									{style.title}
								</label>
							</div>
						))}
					</div>
				</div>


				<div className="flex gap-2">
					<input
						id="pictures"
						type="checkbox"
						className="border-neutral-600 w-6"
						checked={includePictures}
						onChange={() => setIncludePictures(!includePictures)}
					/>
					<label htmlFor="pictures" className="text-neutral-900">
						Do you want pictures included?
					</label>
				</div>

				<div>
					<p className="mb-[0.88rem] text-neutral-900">Choose document style</p>
					<div className="flex flex-col gap-2 ml-4">
						{documentStyles.map((style, index) => (
							<div key={index} className="flex items-center gap-2">
								<input
									id={style.value}
									type="radio"
									className="border-neutral-300 w-6 h-6"
									name="document-style"
									value={style.value}
									checked={documentStyle === style.value}
									onChange={() => setDocumentStyle(style.value)}
								/>
								<label
									htmlFor={style.value}
									className="text-body text-neutral-500">
									{style.title}
								</label>
							</div>
						))}
					</div>
				</div>
			</form>
		</div>
	);
}
