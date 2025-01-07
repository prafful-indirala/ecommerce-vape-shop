import Image from 'next/image';
import Link from 'next/link';

const categories = [
    {
        title: "Pod Systems",
        image: "/images/devices/smok-nord-50w-main.png",
        link: "/shop/pod-systems"
    },
    {
        title: "Mods & Kits",
        image: "/images/devices/smok-nord-50w-main.png",
        link: "/shop/mods"
    },
    {
        title: "E-Liquids",
        image: "/images/devices/smok-nord-50w-main.png",
        link: "/shop/e-liquids"
    },
    {
        title: "Accessories",
        image: "/images/devices/smok-nord-50w-main.png",
        link: "/shop/accessories"
    }
];

export default function VapeCategories() {
    return (
        <div className="max-w-frame mx-auto px-4 xl:px-0">
            <h2 className="text-2xl font-bold mb-8">Shop By Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((category) => (
                    <Link href={category.link} key={category.title} className="group">
                        <div className="relative aspect-square">
                            <Image
                                src={category.image}
                                alt={category.title}
                                fill
                                className="object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black/40 rounded-lg">
                                <p className="text-white text-center absolute bottom-4 w-full">
                                    {category.title}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}